# Week1 Intro

## Text Books

1. Craig Larman, Applying UML and Patters – An Introduction to Object-Oriented Analysis and Design and Iterative Development, 3rd edition, Prentice Hall, 2005 (earlier editions ok)

2. Sommerville, “Software Engineering”, 8th / 9th edition, Pearson, 2007/2011

## Object-Oriented Paradigm (OOP)

- All programming language perform operations and data

### Example:

- **Data**: patientName, patientDateOfBirth, patientGender
- **Operations**: admitPatient, dischargePatient, updatePatientMedicalRecord

## Software Development Issues

- Complex code bases
- Costs are increasing for development and maintenance
- Projects are never finished, constant modifications, projects evolve and enhancements
- Social aspects to be considered around perception, adoption and more

## Key Features of OOP

- Structuring software around **modules** and representing **real world** things, however the notion is too simplistic when it comes to design and implementation
- Promotes tight coupling of data
- Interactions through an **interface** which hides and encapsulates the internal working
- A class is an abstract data type, with the following rules
  - **Inheritance**, designing new data types as an extension of an existing type
  - **Polymorphism and dynamic** (late) binding, permitting a method to be applied to objects of different classes by having the system determine at run-time the type of the object operand and then invoking the correct method for that type.
- An object can be instantiated  as an instance of a class
- A class is an object template specifying data, behaviours and messages.
- Relationships between classes can be
  - specialisation/generalisation which are represented via inheritance
  - aggregation to group related items in a class representing the composite object
  - association which is a relationship between apparently unrelated classes

## Issues of OO

- Doest facilitate optimal coding
- Misinterpretation and ambiguity
- Making a lot of assumptions with minimal user input
- Incomplete specification or missing functionality (security)
- Changing landscape and requirements
- Models, models everywhere but who cares
