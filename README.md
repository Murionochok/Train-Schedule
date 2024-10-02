# Train-Schedule

Prerequisites

Node.js (v14 or later)
npm or yarn
PostgreSQL

Installation

1. Clone the repository:
```bash
git clone https://github.com/Murionochok/Train-Schedule.git
cd Train-Schedule
```

2. Backend:
```bash
cd ./server
npm install
npx prisma migrate dev --name local
```
In the file server/prisma/schema.prisma use your db credentials.
Then:
```bash
npm run dev
```

3.Frontend:
```bash
cd ../client
npm install
npm run dev
```

