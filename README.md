# SAV Backend 🚀

Welcome to `sav-backend`! This is a comprehensive microservices-based backend system, designed to efficiently manage and streamline operations related to products, transactions, authentication, and installments.

## 🌟 Features

- **Centralized API Gateway**: Seamlessly routes client requests to the appropriate microservices.
- **GraphQL Integration**: Offers a unified GraphQL endpoint for flexible and efficient data querying.
- **Robust Authentication**: Ensures secure user registration, login, and other authentication-related functionalities.
- **Comprehensive CRUD**: Full-fledged Create, Read, Update, and Delete operations for products, transactions, and installments.
- **Health Monitoring**: Dedicated endpoints for real-time health status checks of each service.

## 🛠 Components

### 1. **API Gateway**
The heart of our system, it acts as the main entry point for all client requests, ensuring they are directed to the right microservice. It also provides a GraphQL endpoint for enhanced data querying capabilities.

### 2. **Auth Microservice**
Our fortress of security. This microservice is dedicated to all things authentication, ensuring users can register, log in, and perform other related tasks securely.

### 3. **Products Microservice (Microservice 1)**
The one-stop-shop for product management. From creating new products to updating or deleting them, this microservice has got it all covered.

### 4. **Transactions Microservice (Microservice 2)**
Financial transactions are delicate, and this microservice ensures they are handled with utmost precision. Whether it's creating a new transaction or fetching details of existing ones, it's all taken care of here.

### 5. **Installments Microservice (Microservice 3)**
Managing installment payments can be tricky, but not with this microservice. It offers a range of functionalities to ensure installment operations are smooth and hassle-free.

## 🚀 Getting Started

Each microservice, including the API gateway, comes with its respective `docker-compose.yaml` and `Dockerfile`. Ensure you have Docker installed, and follow the setup instructions in each microservice's directory.

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

**Happy Coding!**
