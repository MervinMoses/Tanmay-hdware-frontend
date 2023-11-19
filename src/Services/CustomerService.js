import { ref, set,get } from 'firebase/database';
import { database, analytics, storage, db } from '../FirebaseConfig';
import {
    addDoc,
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
  import { toast } from 'react-toastify';

export async function insertproduct(data) {
    let products = getAllProductGroups();
    try {
        const productRef = collection(db, 'productgroups');
         
            await addDoc(productRef, data)
        
        toast.success("Add product successfully");
        console.log("successfully")

    } catch (error) {
        console.log(error);
        // setLoading(false)
    }

    
    }
    export async function updateProductGroups(Id,updatedData) {
        console.log("up")
        try {
          const productRef = doc(collection(db, "productgroups"), Id);
      
          // Update the document with the new data
          await updateDoc(productRef, updatedData);
      
          console.log('Product updated successfully');
        } catch (error) {
          console.error('Error updating product:', error);
          throw error; // Rethrow the error if you want to handle it in the calling code
        }
      }

export async function getAllProductGroups() {
    try {
        const querySnapshot = await getDocs(collection(db, 'productgroups'));
    
        const productGroups = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(productGroups)
        return productGroups
      } catch (error) {
        console.error('Error fetching product groups from Firebase:', error);
        throw error;
      }
     }
    

