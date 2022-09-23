const { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLID, GraphQLInt, GraphQLList } = require('graphql')
const student = [{
    id:1,
    name: 'Ram',
    age: 25,
    staffId: 1
},{
    id: 2,
    name: 'Azar',
    age: 30,
    staffId: 2
},
{
    id: 3,
    name: 'Kalaivanan',
    age: 60,
    staffId: 1
},
{
    id: 4,
    name: 'Venkat',
    age: 23,
    staffId: 2
}]

const staff = [{
    id: 1,
    name: 'sharmila',
    dept: 'csc'
},
{
    id: 2,
    name: 'meena',
    dept: 'msc'
}]

const StudentType = new GraphQLObjectType({
    name: 'student',
    fields: ()=>({
        id:{type: GraphQLID},
        name:{type: GraphQLString},
        age:{type: GraphQLInt},
        staff: {
            type: StaffType,
            resolve(parent, args){
                return staff.find((obj)=>obj.id == parent.staffId)
            }
        }
    })
})

const StaffType = new GraphQLObjectType({
    name: 'staff',
    fields:{
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        dept: {type: GraphQLString},
        stud:{
            type: new GraphQLList(StudentType),
            resolve(parent, args){
                console.log(parent)
                return student.filter((obj)=>obj.staffId == parent.id)
            }
        }
    }
})


const RootType = new GraphQLObjectType({
    name: 'Rootquery',
    fields:{
        student: {
            type: StudentType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                return student.find((obj)=>obj.id == args.id)
                // return {data: student}
            }
        },
        staff:{
            type: StaffType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                return staff.find((obj)=>obj.id == args.id)
                // return {data: student}
            }
        },
        stydents:{
            type: new GraphQLList(StudentType),
            resolve(parent, args){
                return student
            }
        },
        staffs:{
            type: new GraphQLList(StaffType),
            resolve(parent, args){
                return staff
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootType
})