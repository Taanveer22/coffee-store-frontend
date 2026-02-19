# 🚀 React Router Loader Explained (Beginner Friendly Guide)

## 📌 Introduction

When learning **React Router**, many beginners ask:

👉 *Why does the loader always use GET (read operation)?*\
👉 *Why can't we update data directly inside the loader?*

This guide explains everything step‑by‑step in a simple way.

------------------------------------------------------------------------

# 🧠 What is a Loader?

A **loader** is a function in React Router that runs **before a
component renders**.

Its main job is:

✅ Fetch data\
✅ Prepare data\
✅ Send data to the component using `useLoaderData()`

------------------------------------------------------------------------

## 🔄 Visual Flow

    User visits route
            ↓
    React Router runs loader()
            ↓
    Loader fetches data (GET request)
            ↓
    Data becomes available
            ↓
    Component renders

------------------------------------------------------------------------

# ❓ Why Loader Uses GET (Read Operation)

The loader is designed ONLY for reading data.

When you open an update page:

    /updateCoffee/:id

You need existing data first:

-   Coffee name
-   Quantity
-   Supplier
-   Category
-   Details

So the loader fetches the current data from database using:

    GET /readCoffees/:id

------------------------------------------------------------------------

## 🟢 Real Life Analogy

Imagine opening a Google Docs file:

1️⃣ First, the document loads (GET existing data)\
2️⃣ Then you edit it\
3️⃣ Then you save changes (PUT/POST)

Loader = Step 1 (Load data)

------------------------------------------------------------------------

# ❌ Why NOT Use PUT or POST in Loader?

PUT / POST are used to:

-   Update data
-   Create data
-   Delete data

Loader should NOT modify database because:

-   It runs automatically when navigating
-   It should be safe and predictable
-   It must only fetch data

------------------------------------------------------------------------

# 🧠 Simple Rule (Easy Memory)

    Loader = READ (GET)
    Submit = WRITE (POST / PUT / DELETE)

------------------------------------------------------------------------

# 🔥 Beginner Flow Example

## Step 1 --- User opens update page

    /updateCoffee/123

## Step 2 --- Loader runs

    GET /readCoffees/123

Fetch existing coffee data.

## Step 3 --- Component receives data

``` js
const loadedCoffee = useLoaderData();
```

## Step 4 --- User edits form

## Step 5 --- Submit update

    PUT /updateCoffees/123

Database updates.

------------------------------------------------------------------------

# ⭐ Best Practice (Senior Developer Tip)

Follow REST naming:

    GET    /coffees        → read all
    GET    /coffees/:id    → read one
    POST   /coffees        → create
    PUT    /coffees/:id    → update
    DELETE /coffees/:id    → delete

------------------------------------------------------------------------

# 🎯 Key Takeaway

👉 Loader is for fetching data BEFORE rendering.

👉 Always use GET inside loader.

👉 Use POST/PUT/DELETE when user submits form.

------------------------------------------------------------------------
