import postgres from 'postgres'
import { drizzle } from 'drizzle-orm/postgres-js'
import { checklist, department, item, role, user } from './schema'

export const items = [
  { id: 1, text: 'Stock Register', status: false, comment: '', checklist_id: 1, created_at: new Date(), updated_at: new Date() },
  { id: 2, text: 'Inward Register', status: false, comment: '', checklist_id: 1, created_at: new Date(), updated_at: new Date() },
  { id: 3, text: 'Outward Register', status: false, comment: '', checklist_id: 1, created_at: new Date(), updated_at: new Date() },
  { id: 4, text: 'Students and Staff Profile', status: false, comment: '', checklist_id: 1, created_at: new Date(), updated_at: new Date() },
  { id: 5, text: 'Result Analysis (Semester + Subject)', status: false, comment: '', checklist_id: 1, created_at: new Date(), updated_at: new Date() },
  { id: 6, text: 'Student Feedback - Overall Feedback', status: false, comment: '', checklist_id: 1, created_at: new Date(), updated_at: new Date() },
  { id: 7, text: 'Student Feedback - Individual Feedback', status: false, comment: '', checklist_id: 1, created_at: new Date(), updated_at: new Date() },
  { id: 8, text: 'Parents Meeting / Feedback', status: false, comment: '', checklist_id: 1, created_at: new Date(), updated_at: new Date() },
  { id: 9, text: 'Leave and On - Duty Request', status: false, comment: '', checklist_id: 1, created_at: new Date(), updated_at: new Date() },
  { id: 10, text: 'Seminar / Department Activities / Program Report', status: false, comment: '', checklist_id: 1, created_at: new Date(), updated_at: new Date() },
  { id: 11, text: 'Alumini Details', status: true, comment: '', checklist_id: 1, created_at: new Date(), updated_at: new Date() },
  { id: 12, text: 'Internal Assessment Mark Register / Progress Report', status: false, comment: '', checklist_id: 1, created_at: new Date(), updated_at: new Date() },
  { id: 13, text: 'Students Attendance Register', status: false, comment: '', checklist_id: 1, created_at: new Date(), updated_at: new Date() },
  { id: 14, text: 'Industrial Visit', status: true, comment: '', checklist_id: 1, created_at: new Date(), updated_at: new Date() },
  { id: 15, text: 'Substitution Register', status: false, comment: '', checklist_id: 1, created_at: new Date(), updated_at: new Date() },
  { id: 16, text: 'Disciplinary Action', status: false, comment: '', checklist_id: 1, created_at: new Date(), updated_at: new Date() },
  { id: 17, text: 'Remedial Mark List', status: false, comment: '', checklist_id: 1, created_at: new Date(), updated_at: new Date() },
  { id: 18, text: 'Work Load File', status: false, comment: '', checklist_id: 1, created_at: new Date(), updated_at: new Date() },
  { id: 19, text: 'Student\'s +2 Mark List', status: false, comment: '', checklist_id: 1, created_at: new Date(), updated_at: new Date() },
  { id: 20, text: 'Circular File', status: false, comment: '', checklist_id: 1, created_at: new Date(), updated_at: new Date() },
  { id: 21, text: 'Event File', status: false, comment: '', checklist_id: 1, created_at: new Date(), updated_at: new Date() },
  { id: 22, text: 'Moovalur Scheme', status: false, comment: '', checklist_id: 1, created_at: new Date(), updated_at: new Date() },
  { id: 23, text: 'Syllabus Analysis', status: true, comment: '', checklist_id: 1, created_at: new Date(), updated_at: new Date() },
  { id: 24, text: 'Individual Time Table', status: false, comment: '', checklist_id: 1, created_at: new Date(), updated_at: new Date() },
  { id: 25, text: 'Lesson Plan', status: false, comment: '', checklist_id: 1, created_at: new Date(), updated_at: new Date() },
  { id: 26, text: 'Test Schedule', status: false, comment: '', checklist_id: 1, created_at: new Date(), updated_at: new Date() },
  { id: 27, text: 'Model Question Paper', status: false, comment: '', checklist_id: 1, created_at: new Date(), updated_at: new Date() },
  { id: 28, text: 'Add On and Diploma Courses', status: false, comment: '', checklist_id: 1, created_at: new Date(), updated_at: new Date() },
  { id: 29, text: 'Academic Audit Report', status: false, comment: '', checklist_id: 1, created_at: new Date(), updated_at: new Date() },
  { id: 30, text: 'Library Book List File', status: false, comment: '', checklist_id: 1, created_at: new Date(), updated_at: new Date() },
]

const list = [
  { id: 1, year: 2024, dept_id: 1, created_at: new Date(), updated_at: new Date() },
]

const users = [
  { username: 'naveen', password: 'naveen', role_id: 2, dept_id: 1, created_at: new Date(), updated_at: new Date() },
  { username: 'naveen', password: 'naveen', role_id: 3, created_at: new Date(), updated_at: new Date() },
]

const departments = [
  { id: 1, name: 'cse', created_at: new Date(), updated_at: new Date() },
]

const roles = [
  { id: 2, name: 'hod', created_at: new Date(), updated_at: new Date() },
  { id: 3, name: 'team', created_at: new Date(), updated_at: new Date() },
]


const connection = postgres(process.env.DB_URL!)
const db = drizzle(connection)

const main = async () => {
  console.log('Seeding...')
  await db.insert(department).values(departments)
  console.log('Seeded departments')
  await db.insert(role).values(roles)
  console.log('Seeded roles')
  await db.insert(user).values(users)
  console.log('Seeded users')
  await db.insert(checklist).values(list)
  console.log('Seeded checklist')
  await db.insert(item).values(items)
  console.log('Seeded items')
  console.log('Seeding completed!!')
}

main()
  .then(() => {
    process.exit(0)
  })
  .catch(err => {
    console.error(err.message)
    process.exit(1)
  })
