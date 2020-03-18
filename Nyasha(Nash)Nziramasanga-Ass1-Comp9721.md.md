# Cover Page

|                |                                 |
| -------------- | ------------------------------- |
| **Topic Code** | COMP9721                        |
| **Topic Name** | Enterprise Information Security |
| **Name**       | Nyasha (Nash) Nziramasanga      |
| **FAN**        | nzir0001                        |
| **Student ID** | 2243700                         |
| **Word Count** |                                 |

## Table of Contents

- [1. Introduction](##1.%20Introduction)
  - [1.1 Risk Discussion](###1.1%20Risk%20Discussion)
- [2. Background Research](##2.%20Background%20Research)
  - [2.1 Case Study](###2.1%20Case%20Study)
  - 2.2 Review of information security risks
- [3. Risk Prioritisation and Analysis](##3.%20Risk%20Prioritisation%20and%20Analysis)
  - [3.1 Risk Assessment](###3.1%20Risk%20Assessment)
    - [3.1.1 Identified Stakeholders](#####3.1.1%20Identified%20Stakeholders)
    - [3.1.2 Risk Model](#####3.1.2%20Risk%20Model)
    - [3.1.3 Identified Risks](#####3.1.3%20Identified%20Risks)
  - [3.2 Risk Control Plan Strategy](###3.2%20Risk%20Control%20Plan%20Strategy)
- [4. References](##4.%20References)

## 1. Introduction

### 1.1 Risk Discussion

#### Purpose

The purpose of the risk assessment report is to identify threats and vulnerabilities related to Kontrol4 PTY LTD (K4) cyber resilience. The risk assessment will be utilised to identify risks, the potential impact of the risks, form a mitigation plan and procedures on how to monitor implemented risk controls.

## 2. Background Research

### 2.1 Case Study

Kontrol4 PTY LTD is an IT services company based in Melbourne, Australia. K4 manage and sale a Customer relationship management (CRM) software called Upvise CRM to over 150 plus small to medium enterprises (SMEs) customers in the civil construction industry. K4 currently have a workforce of 35 employee's split into the marketing, administration, IT, accounting and sales departments.

The IT department handles all software development and maintenance of the Upvise CRM software services. The e-commerce website for their Managed Services Provider (MSP) services such as Microsoft 365, GSuite and Myki password manager uses a third party service called [Stripe](https://stripe.com/au) for as there payment gateway.

Recently the IT Department has been experimenting with working from home for its software development teams and adopted a BYOD (Bring Your Own Device) policy to improve employee satisfaction and reduce hardware procuring costs. All of K4's customer database's and web apps are hosted on Microsoft Azure Cloud Platform which is being hosted on Servers located in the Netherlands.

## 3. Risk Prioritisation and Analysis

### 3.1 Risk Assessment

#### 3.1.1 Identified Stakeholders

Below are the identified stakeholders participants and techniques used to assess and gather information.

##### Participants

| Role                      | Participant                                  |
| ------------------------- | -------------------------------------------- |
| IT Director               | Harry Stevens                                |
| DevOps                    | Lucy Harper, Edward Jap                      |
| Software Development Team | Tim Burns, Laura Newton, Adrian Max, Tom Lui |

##### Techniques Used

| Technique                       | Description                                                                                                                                                                                                                         |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Questionnaire and Interview** | Assessed participants using digital forms with 40 questions based on the [PCI Data Security Standards (R2)](http://www.umanitoba.ca/admin/financial_services/media/PCI_DSS_Compliance_FinalNov_01_-_PDF.pdf) and a 10 min interview |
| **Vulnerability Database**      | Several vulnerability databases where used such as [owasp top 10 web application security risks](https://owasp.org/www-project-top-ten/) and [National Vulnerability Database](https://nvd.nist.gov/)                               |
| **Onsite Visit**                | A visit to K4s Offices in Frankston, Melbourne to assess physical access and vulnerabilities                                                                                                                                        |
| **Policy Review**               | Reviewing of security policy documentation, system documentation and operational procedures                                                                                                                                         |

### 3.1.2 Risk Model

For determining risk for K4, the following risk model is utilized:

```
Risk = Threat Event Likelihood X Impact of Event Occurring
```

Threat event likelihood definition:

| Likelihood (Weight) | Definition                                                                |
| ------------------- | ------------------------------------------------------------------------- |
| High (1.0)          | Threat event is highly likely to occur, with no controls to prevent event |
| Moderate (0.5)      | Threat event can occur, however controls are in place to impede event     |
| Low (0.1)           | Threat event likely wont occur, and controls are in place to impede event |

Impact of Event Occurring measured as a score :

| Impact (Score) | Definition                                                                     |
| -------------- | ------------------------------------------------------------------------------ |
| High (100)     | Major Damage to company assets, with potential financial and reputational loss |
| Moderate (50)  | Significant loss and degradation to company assets                             |
| Low (10)       | Minor damage to company assets and minimal financial loss                      |

### 3.1.3 Identified Risks

> ADD TABLE

#### Bring Your Own Device (BYOD) policy risks

As a BYOD policy brings with it multiple benefits such as increased productivity, cost savings and accessibility to company information from any location [Reference1](https://minerva-access.unimelb.edu.au/bitstream/handle/11343/33345/300314_2013_Tan_Risk.pdf?sequence=1&isAllowed=y).

There are however major risks associated with BYOD, the biggest one being lack of control over data and devices. Employees can abuse company IT resources by bypassing IT policy for ease of use on there personal device and using there devices for personal recreational activities such as using social media during work.

Another major that since Kontrol4 has development teams who are building the Upvise CRM Software there is potential for intellectual property breaches as the software is being developed on none company hardware. This could also lead to data leaks on important company secrets to unauthorized agents such as there competitors.

#### Information Technology (IT) Infrastructure

Kontrol4 host there web applications and databases on Microsoft Azure Cloud Platform. The risk with this if for some reason the service is not available they lose critical parts for there systems. Also there are no back ups for the databases which is a big security risk if a database is deleted.

### 3.2 Risk Control Plan Strategy

### a. Risk Control Strategy

### b. Risk Control Implementation

### c. Risk Control Monitoring and Assurance

## 4. References

- [Reference 1](https://minerva-access.unimelb.edu.au/bitstream/handle/11343/33345/300314_2013_Tan_Risk.pdf?sequence=1&isAllowed=y)
- [Reference 2 - PCI data security standards](http://www.umanitoba.ca/admin/financial_services/media/PCI_DSS_Compliance_FinalNov_01_-_PDF.pdf)
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTEwNTc3MzMwMSwxOTc5MDgzNDQ1XX0=
-->