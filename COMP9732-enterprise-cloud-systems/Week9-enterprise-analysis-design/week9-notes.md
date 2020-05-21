# Week9 Enterprise Analysis Design

- [Week9 Enterprise Analysis Design](#week9-enterprise-analysis-design)
  - [What is Analysis](#what-is-analysis)
  - [BABOK](#babok)
    - [Benefits of Enterprise Analysis Activities](#benefits-of-enterprise-analysis-activities)
  - [Waterfall Model - Compare & Contrast](#waterfall-model---compare--contrast)
    - [Problem Solving in the LifeCycle](#problem-solving-in-the-lifecycle)
  - [What are Systems](#what-are-systems)
  - [Enterprise Integration Frameworks](#enterprise-integration-frameworks)
  - [Enterprise Application Integration (EAI)](#enterprise-application-integration-eai)
    - [EAI Categories](#eai-categories)
    - [EAI Challenges](#eai-challenges)
  - [Enterprise Service Bus](#enterprise-service-bus)
    - [ESB Functions](#esb-functions)

---

## What is Analysis

Detailed examination of the elements or structure of a topic for discussion or interpretation

**Systems Analysis** -The process of studying a procedure or business in order to identify its goals and purposes and create systems and procedures that will achieve them in an efficient way

**Business Analysis** - identifying business needs, and determining the solutions to
business problems

**Enterprise Analysis** - a planning process that
analyses organisational information requirements
and emphasis's how computer-based information
systems will improve the performance and
competitive position of a business enterprise,
including planning how information systems can
support the basic business processes, functions and
organizational units of an organization

![enterprise-analysis-model](images/enterprise-analysis-model.png)

## BABOK

- Business Analysis Body of Knowledge, resource manual on Business & Enterprise Analysis. Enterprise analysis captivities include:
  - Developing strategic goals and a strategic plan
  - Understanding and developing the business architecture
  - Selecting the right solution approaches for projects and developing their business cases
  - Initiating projects and making sure they deliver value to the sponsor

### Benefits of Enterprise Analysis Activities

- Better business alignment with strategic goals
- Improved planning & decision making
- Risk mitigation
- Reduced duplication of efforts
- Improved integration of resources - people,
  processes, and tools

## Waterfall Model - Compare & Contrast

Stages:

- Requirements
- Design
- Implementation
- Verification
- Maintenance

### Problem Solving in the LifeCycle

- Project Initiation
- Project Planning
- Analysis
- Generate & Evaluate alternatives
- Design
- Construction
- Implementation

## What are Systems

Set of integrated parts or elements that function together to form a complex whole, these parts are interacting, interrelated or interdependent

**Systems Engineering** - A process that is concerned with specifying a system, integrating its components and testing that the system meets its requirements

---

## Enterprise Integration Frameworks

- **Application Programming Interfaces (API)**, A set of procedures that allow external applications to
  connect to an application & obtain data or services and used to integrate systems

- **Standardisation**, A formal specification to establish the technical requirements for the operation of a system e.g. HTML

- **Data Integration Technologies**, Focus on integrating enterprise via data e.g. data warehouse

- **Enterprise Integration Levels**,
- **Extract Transform & Load**, Moving data from system A to system B may require data transformation to format
- **Data Middleware**, Make a Data Middleware to handle data transformations e.g. database gateways to different databases, Take SQL & translate to specific database format & translate the results back for the client

- **Centralised Database**, A collection of heterogeneous, component databases over which a global view of the data is created, so that the separate databases can be treated as if they were
  a single database

- **Data Warehouse**, Used for Online Analytical Processing (OLAP). The OLAP server sits between a client & a database management systems (DBMS) & understands how data is organised in the database & has special functions for analysing the data

## Enterprise Application Integration (EAI)

- Is the use of software & computer systems
  architectural principles to integrate a set of enterprise
  computer applications
- Provides unrestricted sharing of data & business
  processes throughout the networked applications or
  data sources in an organisation

### EAI Categories

- **Database Linking**: databases share information duplicate information as needed.

- **Application Linking**: the enterprise shares business processes & data between two or more applications.

- **Data Warehousing**: data is extracted from a variety of data sources & channelled into a specific database for analysis.

- **Common Virtual System**: the pinnacle of EAI; all aspects of enterprise computing are tied together so that they appear as a unified application

### EAI Challenges

- Lack of standardisation
- Vendor lock-in

## Enterprise Service Bus

- A Web Services-ware reincarnation of traditional EAI solutions. EAI & ESB are a driving force for centralisation
- The multi-language & multi-platform design of an ESB allows enterprises to process data between applications from various sources.
- ESB is also referred to as a message broker
- An open standards-based distributed synchronous or asynchronous messaging middleware (also called ‘a message broker’) that provides secure interoperability between enterprise applications via XML, Web services interfaces & standardised rules-based routing of documents

### ESB Functions

- **Portability** is the ability to share the data between different systems/environments
- **Transformation** of data from one format to another
- **Load Balancing/Clustering**, ability to distribute processing among several devices
- **Failover**, ability to transfer messaging functions to another server if one should fail during the data exchange. Identifies messages & routes them between applications & services
