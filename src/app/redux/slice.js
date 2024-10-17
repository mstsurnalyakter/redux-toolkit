// const { createSlice,nanoid,current } = require("@reduxjs/toolkit");

// const initialState = {
//     users:[]
// }

// const Slice = createSlice({
//     name:"addUserSlice",
//     initialState,
//     reducers:{
//         addUser:(state,action)=>{
//             console.log(action);
//             const data={
//                 id:nanoid(),
//                 name:action.payload
//             };
            
//             state.users.push(data);
//             let userData = JSON.stringify(current(state.users));
//             localStorage.setItem("users",userData);
//             console.log(current(state.users));
//         },
//         removeUser:(state,action)=>{
//             console.log(action);
//             const data = state.users.filter(user=>user.id !== action.payload);
//             state.users = data;
//         }
//     }
// });

// export const {addUser,removeUser} = Slice.actions;
// export default Slice.reducer;

const { createSlice,nanoid,current } = require("@reduxjs/toolkit");

const initialState = {
    users:JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
}

const Slice = createSlice({
    name:"addUserSlice",
    initialState,
    reducers:{
        addUser:(state,action)=>{
            console.log(action);
            const data={
                id:nanoid(),
                name:action.payload
            };
            
            state.users.push(data);
            let userData = JSON.stringify(current(state.users));
            localStorage.setItem("users",userData);
            console.log(current(state.users));
        },
        removeUser:(state,action)=>{
            console.log(action);
            const data = state.users.filter(user=>user.id !== action.payload);
            let userInfo = JSON.stringify(data);
            localStorage.setItem("users",userInfo)
            // localStorage.removeItem("users",action.payload)
            state.users = data;
        }
    }
});

export const {addUser,removeUser} = Slice.actions;
export default Slice.reducer;

