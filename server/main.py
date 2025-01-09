import asyncio
import uvicorn
from fastapi import FastAPI
from typing import Optional

from grpc_server import run_grpc_server  # from the file above

app = FastAPI()

@app.get("/health")
def health_check():
    return {"status": "ok"}

async def main():
    # Run the gRPC server concurrently
    loop = asyncio.get_running_loop()
    grpc_task = loop.create_task(run_grpc_server())

    # Run FastAPI with Uvicorn in-process
    config = uvicorn.Config(app, host="0.0.0.0", port=8000, log_level="info")
    server = uvicorn.Server(config)
    http_task = loop.create_task(server.serve())

    # Wait for both to finish (which theoretically never should in normal use)
    await asyncio.gather(grpc_task, http_task)

if __name__ == "__main__":
    asyncio.run(main())
