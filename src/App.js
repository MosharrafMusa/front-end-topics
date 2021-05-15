const UserGreetings=(props)=>{
return <h1>Welcome back!</h1>
}

const GuestGreetings=(props)=>{
  return <h1>Please sign up</h1>
  }

  export const Greetings=(props)=>{
    const isLoggedIn = props.isLoggedIn
    if (isLoggedIn){
      return <UserGreetings/>;
    }
    return <GuestGreetings/>;
    }
  