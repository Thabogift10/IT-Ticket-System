# 🛠️ IT Ticket Management System

## 📌 Project Overview

The IT Ticket Management System is a web application designed to help organizations track, manage, and resolve IT support requests efficiently. Users can submit tickets, while administrators can update ticket statuses, filter requests, and monitor overall support activity through a dashboard.

This project demonstrates real-world problem solving by simulating a helpdesk environment commonly used in IT departments.

---

## 🎯 Features

* ✅ Create and submit IT support tickets
* ✅ View all submitted tickets in a dashboard
* ✅ Update ticket status (Open Ticket, In Progress, Resolved)
* ✅ Delete tickets
* ✅ Filter tickets by status
* ✅ Live ticket counters for status tracking
* ✅ Data persistence using Local Storage
* ✅ Mobile-responsive interface
* ✅ Deployed online for real-world access

---

## 🧠 What Problem It Solves

Organizations often struggle with tracking support requests manually. This system provides a simple and structured way to log issues, monitor progress, and ensure tickets are resolved efficiently.

---

## 🛠️ Technologies Used

* HTML5 — Structure and layout
* CSS3 — Styling and responsive design
* JavaScript (Vanilla JS) — Application logic and interactivity
* Local Storage — Client-side data persistence
* Netlify — Deployment

---

## 🖥️ How It Works

1. Users submit a ticket with issue details.
2. Tickets are stored in Local Storage.
3. The admin dashboard displays all tickets.
4. Admin can update status or delete tickets.
5. Status counters update dynamically.
6. Filters allow viewing tickets by progress stage.

---

## 🚀 Live Demo

👉https://tbester-it-ticket.netlify.app/

---

## 📂 Project Structure

```
IT-Ticket-System/
│
├── index.html        # Ticket submission page
├── dashboard.html    # Admin dashboard
├── css/
│   └── styles.css
├── js/
│   └── dashboard.js
│   └── script.js
└── assets/
```

---

## 🧪 Key Learning Outcomes

* Implementing CRUD operations using JavaScript
* Managing application state with Local Storage
* Debugging real-world UI and logic issues
* Building responsive layouts
* Designing user-friendly dashboards
* Handling dynamic DOM updates

---

## ⚠️ Challenges & Solutions

One major challenge was ensuring ticket updates worked correctly when filtering tickets or viewing on mobile devices. This was resolved by updating tickets using unique identifiers instead of array indexes, ensuring accurate state management.

---

## 👨‍💻 Author

Thabo Gift — IT Support / Junior Developer

---

## 📜 License

This project is for educational and portfolio purposes.
