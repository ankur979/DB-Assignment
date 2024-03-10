## 1. Relationship between Product and Product_Category Entities

The relationship between the "Product" and "Product_Category" entities is one-to-many. A product can belong to one category, but a category can have many products. This is enforced by the `categoryId` foreign key in the `Product` table, which references the primary key (`_id`) of the `ProductCategory` table. A product can have a null value in the `category_id` column, indicating it's not assigned to any category.

### 2. Ensuring Valid Category Assignment

#### Database Constraints:

- **Foreign Key Constraint:** Enforce a foreign key constraint on the `categoryId` column in the `Product` table referencing the `_id` of the `ProductCategory` table. This prevents inserting products with non-existent category IDs.

#### Application Logic:

- **Validation on Product Entry:** During product creation, implement validation to ensure a valid category is chosen before saving the product.
- **Default Category:** Define a default category (e.g., "Uncategorized") and assign it to products if no specific category is chosen.

#### Data Integrity Checks:

- **Scheduled Scans:** Run periodic checks to identify products with invalid category IDs and take corrective actions (e.g., assigning a default category or flagging for review).
