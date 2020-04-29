# Query Processing and Optimisation

**Query Processing** - activities involved in retrieving dta from the database

**Query Optimisation** - Choosing an efficient execution strategy for processing a query

use Relational Algebra queries to check strategies

**Query Decomposition** - Transforming high level queries into Relation Algebra query and check that query is syntactically and semantically correct. Typical stages are:

- Analysis - analyse query syntactically using compiler techniques, verify relations, attributes and operation
- Normalization - Converts query into a normalized form for easier manipulation
- Semantic analysis - Reject normalized queries that are incorrectly formulated or contradictory
- Simplification - detects redundant qualifications, eliminates common sub-expressions
- Query restructuring
