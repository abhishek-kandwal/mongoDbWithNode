const { MongoClient } = require('mongodb')

async function main() {
    const client = new MongoClient('mongodb+srv://devDB:password@xoxomovies.umvru.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
    try {
        await client.connect();
        
        // await listDb(client);
        
        // await addUser(client, {
        //     name: 'newAdmin',
        //     password: '123456'
        // })
        
        // await addMultiUser(client, [
        //     {
        //         name: 'avii',
        //         password: 'password'
        //     },{
        //         name: 'shark',
        //         password: 'newUser'
        //     }
        // ])

        // await searchUser(client,{
        //     name: 'admin'
        // })

        // await searchByFilter(client, {
        //     maxAge: 18,
        //     minSal: 20000,
        //     limit: 5
        // })

        // await updateSingleData(
        //     client, 
        //     'admin',
        //     'admin12345678'
        // )

        // await updateSingleData(
        //     client,
        //     'admin',
        //     'pass123'
        // )

        // await updateMultiData(client)

        // await deleteData(
        //     client,
        //     'newAdmin'
        // )

        // await deleteMulti(
        //     client,
        //     'avii'
        // )

    } catch (e) {
        console.log(e)
    } finally {
        await client.close();
    }

}

// get list of DB
// async function listDb(client) {
//     const dbList = await client.db().admin().listDatabases();
//     console.log("DB", dbList)
// }

// add single user
// async function addUser(client, newUser) {
//     const userId = await client.db('xoxo').collection('user').insertOne(newUser)
//     console.log('new User', userId)
// }

// add multi user
// async function addMultiUser(client, arrayOfObj) {
//     const userId = await client.db('xoxo').collection('user').insertMany(arrayOfObj)
//     console.log('new User', userId)
// }

// search single entry
// async function searchUser(client, searchObj) {
//     const result = await client.db('xoxo').collection('user').findOne({
//         name: searchObj.name
//     })
//     if(result) {
//         console.log("search result", result)
//     } else {
//         console.log("Not Found!")
//     }
// }

// filter search result
// async function searchByFilter(client, {
//     maxAge = 0,
//     minSal = 0,
//     limit = Number.MAX_SAFE_INTEGER
// } = {}) {
//     const cursor = client.db('xoxo').collection('user').find({
//         age: {
//             $gte: maxAge
//         },
//         salary: {
//             $gte: minSal
//         }
//     }).sort({
//         last_review: -1
//     }).limit(limit);

//     const result = await cursor.toArray();
//     if (result.length > 0) console.log('record found')
//     else console.log('Noting Found!')
// }

// updating single entry
// async function updateSingleData(client, searchByName, updatedData) {
//     const result = await client.db('xoxo').collection('user').updateOne({
//         name: searchByName
//     },{
//         $set: {
//             password: updatedData
//         }
//     })
    
//     console.log('Matched found!', result.matchedCount)
//     console.log('Matched found!', result.modifiedCount)
// }

// upsert single entry
// async function updateSingleData(client, searchByName, updatedData) {
//     const result = await client.db('xoxo').collection('user').updateOne({
//         name: searchByName
//     },{
//         $set: {
//             password: updatedData
//         }
//     },{
//         upsert: true
//     });
    
//     if(result.upsertCount > 0) console.log('Matched count!', result.matchedUpsertId)
//     else console.log('Matched Updated!', result.modifiedCount)
// }

// update many entries at a time
// async function updateMultiData(client) {
//     const result = await client.db('xoxo').collection('user').updateMany({
//         name: 'admin'
//     }, {
//         $set: {
//             age: 23
//         }
//     })

//     console.log('Matched Count', result.matchedCount)
//     console.log('Delete Count', result.modifiedCount)
// }

// delete Single document
// async function deleteData(client, deleteBy){
//     const result = await client.db('xoxo').collection('user').deleteOne({
//         name: deleteBy
//     });

//     console.log('Deleted Count ', result.deletedCount)
// }

// delete Multi Document
// async function deleteMulti(client, deleteBy) {
//     const result = await client.db('xoxo').collection('user').deleteMany({
//         name: deleteBy
//     })

//     console.log('Deleted Count', result.deletedCount)
// }

main().catch(console.error)

