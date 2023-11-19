import { db } from '../FirebaseConfig';
import { ref, set,get } from 'firebase/database';
import {
    doc,
    onSnapshot,
    updateDoc,
    setDoc,
    deleteDoc,
    collection,
    serverTimestamp,
    getDocs,
    query,
    where,
    orderBy,
    limit,
  } from 'firebase/firestore';

const KEYS = {
    employees: 'ProductGroup',
    employeeId: 'ProductId '
}


export const getDepartmentCollection = () => ([
    { id: '1', title: 'ProductGroup' },
    { id: '2', title: 'Vendor' },
    { id: '3', title: 'GST' },
])

export async function insertEmployee(data) {
    const collectionRef = collection(db, 'productgroups');

    // Check if data.id is a non-empty string
    if (typeof data.id === 'string' && data.id.trim() !== '') {
        const pRef = doc(collectionRef, data.id);
        await setDoc(pRef, data);
        console.log("Data added successfully to Firestore!");
    } else {
        console.error("Invalid document ID:", data.id);
    }
}


export function updateEmployee(data) {
    let employees = getAllEmployees();
    let recordIndex = employees.findIndex(x => x.id == data.id);
    employees[recordIndex] = { ...data }
    localStorage.setItem(KEYS.employees, JSON.stringify(employees));
}

export function generateEmployeeId() {
    if (localStorage.getItem(KEYS.employeeId) == null)
        localStorage.setItem(KEYS.employeeId, '0')
    var id = parseInt(localStorage.getItem(KEYS.employeeId))
    localStorage.setItem(KEYS.employeeId, (++id).toString())
    return id;
}

export function getAllEmployees() {
    if (localStorage.getItem(KEYS.employees) == null)
        localStorage.setItem(KEYS.employees, JSON.stringify([]))
    let employees = JSON.parse(localStorage.getItem(KEYS.employees));
    
    // map departmentID to department title
    let departments = getDepartmentCollection();

    employees = employees.map(x => {
        const department = departments[x.departmentId - 1];
        return {
            ...x,
            department: department ? department.title : '-'
        };
    });

    return employees;
}
