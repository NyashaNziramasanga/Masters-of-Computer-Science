# Week 5 - Transactions

- [Transactions](##Transactions)
- [Concurrency Control](##Concurrency%20Control)

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

2. **Uncommitted dependency problem**
3. **Inconsistent analysis problem**
