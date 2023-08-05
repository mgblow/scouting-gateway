# Scouting Gateway

Scouting Gateway is a gateway application written in Nest.js that works with Modbus and S7 industrial protocols. Its primary purpose is to read data from industrial devices and publish it over MQTT for further processing and analysis.

## Features

- **Industrial Protocol Support:** Scouting Gateway supports both Modbus and S7 industrial protocols, enabling seamless communication with a wide range of industrial devices.

- **Data Acquisition:** The gateway efficiently reads data from connected industrial devices, ensuring accurate and reliable data acquisition.

- **MQTT Integration:** Scouting Gateway integrates with MQTT (Message Queuing Telemetry Transport) to publish the acquired data. This allows for real-time data transfer and facilitates data analysis and visualization.

- **Scalable and Performant:** Built on Nest.js, Scouting Gateway benefits from its scalability and performance, making it suitable for handling large-scale industrial data streams.

- **Easy Configuration:** The gateway comes with user-friendly configuration options, making it easy to set up and customize the data collection and MQTT publishing parameters.

## Getting Started

Follow these steps to get started with Scouting Gateway:

1. **Clone the Repository:** Clone this GitHub repository to your local machine using the following command:

- `git clone https://github.com/mgblow/scouting-gateway.git`

2. **Install Dependencies:** Navigate to the cloned repository directory and install the required dependencies using npm or yarn:

- `
cd scouting-gateway &&
npm install
`