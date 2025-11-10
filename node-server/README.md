# Node.js Express Server

This project is a simple Node.js application using Express. It sets up a server that listens on port 8001.

## Getting Started

To get started with this project, follow the instructions below:

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and [Yarn](https://yarnpkg.com/) installed on your machine.

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd node-server
   ```

2. Install the dependencies:
   ```
   yarn install
   ```

### Running the Server

To start the server with automatic code updates, run:
```
yarn start
```

The server will be running on `http://localhost:8001`.

### Docker

To build and run the application in a Docker container, use the following commands:

1. Build the Docker image:
   ```
   docker build -t node-server .
   ```

2. Run the Docker container:
   ```
   docker run -p 8001:8001 node-server
   ```

The server will be accessible at `http://localhost:8001` from your host machine.