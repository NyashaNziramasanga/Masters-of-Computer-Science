# Week 5 - Transactions

- [Transactions](##Transactions)
- [Concurrency Control](##Concurrency%20Control)
- [Database Recovery](##Database%20Recovery)
- [Advanced Transaction Models](##Advanced%20Transaction%20Models)

---

## Transactions

Action, or series of actions, carried out by user or application, which
reads or updates contents of database

- Success - transaction commits and database reaches a new consistent state.
- Failure - transaction aborts, and database must be restored to consistent state
  before it started.

## Properties of Transactions

Four basic **ACID** properties of transactions:

- `Atomic` - All is written to the DB or nothing’ property
- `Consistency` - Must transform database from one consistent state to
  another.
- `Isolation` - Partial effects of incomplete transactions should not be visible to other transactions.
- `Durability` - Effects of a committed transaction are permanent and
  must not be lost because of later failure

---

## Concurrency Control

The process of managing simultaneous
operations on the database without having them interfere with one another

- Prevents interference when two or more users are accessing DB simultaneously

Three examples of potential problems caused by concurrency:

1. **Lost update problem** - Successfully completed update is overridden by another user

2. **Uncommitted dependency problem** - Occurs when one transaction can see intermediate results of another transaction before it has committed

3. **Inconsistent analysis problem** - Occurs when a transaction reads several values but a second
   transaction updates some of them during the execution of the first transaction

**Serializability** - (No overlapping transactions) ensures that schedule for executing concurrent transactions is equivalent to one that executes the transactions serially in some order

Recoverability

Concurrency Control Techniques:

1. **Locking** - Transactions can use locks to deny access to other transactions and so prevent incorrect updates

Basic rules of locking:

- If transaction has shared lock on item, you can read but not update item.
- If transaction has exclusive lock on item, you can both read and update item.

2. **Timestamping** - A unique identifier created by DBMS that indicates relative starting time of a transaction

- Transactions ordered globally so that older transactions, transactions with smaller timestamps, get priority in the event of conflict.

---

## Database Recovery

Process of restoring database to a correct state in the event of a failure.

---

## Advanced Transaction Models

Five advanced transaction models:

- Nested Transaction Model
- Sagas
- Multi-level Transaction Model
- Dynamic Restructuring
- Workflow Models
