import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    failOnErrors: true,
    openapi: "3.0.0",
    info: {
      title: "Sagara Test API Documentation",
      description: "Backend Sagara Test API Documentation",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Development server",
      },
      //   {
      //     url: "http://27.112.79.127",
      //     description: "Production server",
      //   },
    ],
    components: {},
  },
  apis: ["./src/routes/*.route.js"],
};

export const docs = swaggerJSDoc(options);
