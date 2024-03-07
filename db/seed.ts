import dotenv from 'dotenv';
dotenv.config();

const dbname = 'IQAC';

const departmentsTable = {
  name: 'departments',
  columns: [
    // 'id', 'name', 'created_at', 'updated_at',
    { name: 'id', type: 'INT', options: 'NOT NULL' },
    { name: 'name', type: 'VARCHAR(255)', options: 'NOT NULL' },
    { name: 'created_at', type: 'TIMESTAMP', options: 'DEFAULT CURRENT_TIMESTAMP' },
    { name: 'updated_at', type: 'TIMESTAMP', options: 'DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP' },
  ],
  relations: [
    "INDEX idx_dept_id (id)"
  ],
  data: [
    [1, 'CSE', new Date(), new Date()],
    [2, 'IT', new Date(), new Date()],
    [3, 'ECE', new Date(), new Date()],
    [4, 'MECH', new Date(), new Date()],
  ],
}

const rolesTable = {
  name: 'roles',
  columns: [
    // 'id', 'role', 'created_at', 'updated_at',
    { name: 'id', type: 'INT', options: 'NOT NULL' },
    { name: 'role', type: 'VARCHAR(255)', options: 'NOT NULL' },
    { name: 'created_at', type: 'TIMESTAMP', options: 'DEFAULT CURRENT_TIMESTAMP' },
    { name: 'updated_at', type: 'TIMESTAMP', options: 'DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP' },
  ],
  relations: [
    "INDEX idx_role_id (id)"
  ],
  data: [
    [1, 'admin', new Date(), new Date()],
    [2, 'hod', new Date(), new Date()],
    [3, 'team', new Date(), new Date()],
  ],
}

const usersTable = {
  name: 'users',
  columns: [
    { name: 'id', type: 'INT', options: 'AUTO_INCREMENT PRIMARY KEY' },
    { name: 'username', type: 'VARCHAR(255)', options: 'NOT NULL' },
    { name: 'password', type: 'VARCHAR(255)', options: 'NOT NULL' },
    { name: 'dept_id', type: 'INT', options: '' },
    { name: 'role_id', type: 'INT', options: 'NOT NULL' },
    { name: 'created_at', type: 'TIMESTAMP', options: 'DEFAULT CURRENT_TIMESTAMP' },
    { name: 'updated_at', type: 'TIMESTAMP', options: 'DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP' },
  ],
  relations: [
    "FOREIGN KEY (dept_id) REFERENCES departments(id)",
    "FOREIGN KEY (role_id) REFERENCES roles(id)",
  ],
  data: [
    // Add your name and password here in the empty spots
    [1, '', '', 1, 2, new Date(), new Date()]
  ],
}

const checklistsTable = {
  name: 'checklist',
  columns: [
    { name: 'id', type: 'INT', options: 'AUTO_INCREMENT PRIMARY KEY' },
    { name: 'year', type: 'INT', options: 'NOT NULL' },
    { name: 'dept_id', type: 'INT', options: 'NOT NULL' },
    { name: 'created_at', type: 'TIMESTAMP', options: 'DEFAULT CURRENT_TIMESTAMP' },
    { name: 'updated_at', type: 'TIMESTAMP', options: 'DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP' },
  ],
  relations: [
    "FOREIGN KEY (dept_id) REFERENCES departments(id)",
    "INDEX idx_checklist_id (id)",
  ],
  data: [
    [1, 2024, 1, new Date(), new Date()],
  ],
}

const itemsTable = {
  name: 'items',
  columns: [
    // 'id', 'text', 'status', 'comment', 'checklist_id', 'created_at', 'updated_at',
    { name: 'id', type: 'INT', options: 'AUTO_INCREMENT PRIMARY KEY' },
    { name: 'text', type: 'VARCHAR(255)', options: 'NOT NULL' },
    { name: 'status', type: 'INT', options: 'NOT NULL DEFAULT 0' },
    { name: 'comment', type: 'VARCHAR(255)', options: 'DEFAULT NULL' },
    { name: 'checklist_id', type: 'INT', options: 'NOT NULL' },
    { name: 'created_at', type: 'TIMESTAMP', options: 'DEFAULT CURRENT_TIMESTAMP' },
    { name: 'updated_at', type: 'TIMESTAMP', options: 'DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP' },
  ],
  relations: [
    "FOREIGN KEY (checklist_id) REFERENCES checklist(id)"
  ],
  data: [
    [1, 'Stock Register', 0, '', 1, new Date(), new Date()],
    [2, 'Inward Register', 0, '', 1, new Date(), new Date()],
    [3, 'Outward Register', 0, '', 1, new Date(), new Date()],
    [4, 'Students and Staff Profile', 0, '', 1, new Date(), new Date()],
    [5, 'Result Analysis (Semester + Subject)', 0, '', 1, new Date(), new Date()],
    [6, 'Student Feedback - Overall Feedback', 0, '', 1, new Date(), new Date()],
    [7, 'Student Feedback - Individual Feedback', 0, '', 1, new Date(), new Date()],
    [8, 'Parents Meeting / Feedback', 0, '', 1, new Date(), new Date()],
    [9, 'Leave and On - Duty Request', 0, '', 1, new Date(), new Date()],
    [10, 'Seminar / Department Activities / Program Report', 0, '', 1, new Date(), new Date()],
    [11, 'Alumini Details', 1, '', 1, new Date(), new Date()],
    [12, 'Internal Assessment Mark Register / Progress Report', 0, '', 1, new Date(), new Date()],
    [13, 'Students Attendance Register', 0, '', 1, new Date(), new Date()],
    [14, 'Industrial Visit', 1, '', 1, new Date(), new Date()],
    [15, 'Substitution Register', 0, '', 1, new Date(), new Date()],
    [16, 'Disciplinary Action', 0, '', 1, new Date(), new Date()],
    [17, 'Remedial Mark List', 0, '', 1, new Date(), new Date()],
    [18, 'Work Load File', 0, '', 1, new Date(), new Date()],
    [19, 'Student\'s +2 Mark List', 0, '', 1, new Date(), new Date()],
    [20, 'Circular File', 0, '', 1, new Date(), new Date()],
    [21, 'Event File', 0, '', 1, new Date(), new Date()],
    [22, 'Moovalur Scheme', 0, '', 1, new Date(), new Date()],
    [23, 'Syllabus Analysis', 1, '', 1, new Date(), new Date()],
    [24, 'Individual Time Table', 0, '', 1, new Date(), new Date()],
    [25, 'Lesson Plan', 0, '', 1, new Date(), new Date()],
    [26, 'Test Schedule', 0, '', 1, new Date(), new Date()],
    [27, 'Model Question Paper', 0, '', 1, new Date(), new Date()],
    [28, 'Add On and Diploma Courses', 0, '', 1, new Date(), new Date()],
    [29, 'Academic Audit Report', 0, '', 1, new Date(), new Date()],
    [30, 'Library Book List File', 0, '', 1, new Date(), new Date()],
  ],
}

const tables = [
  rolesTable,
  departmentsTable,
  usersTable,
  checklistsTable,
  itemsTable,
]

async function seed(db: Connection) {
  await db.query("CREATE DATABASE IF NOT EXISTS ?", [dbname])
  console.log(`---- Database ${dbname} created`);
  await db.query("USE ?", [dbname])
  console.log(`---- Using database ${dbname}`);
  tables.forEach(async (table) => {
    let query = `CREATE TABLE IF NOT EXISTS ${table.name}(`;
    query += table.columns.map(col => `${col.name} ${col.type} ${col.options}`).join(', ');
    if (table.relations.length) {
      query += ', ' + table.relations.join(', ') + ')';
    } else {
      query += ')';
    }
    db.query(query)
    console.log(`-------- Table ${table.name} created`);
    if (table.data.length) {
      await db.query(`INSERT INTO ${table.name} VALUES ?`, [table.data])
      console.log(`------------ Data inserted into ${table.name}`);
    }
  });
}

console.log("Connecting...")


import { drizzle } from "drizzle-orm/mysql2";
import * as mysql from "mysql2";
try{

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  waitForConnections: true,
});
const db = drizzle(connection);
}
catch(e){
  console.log(e);
}

