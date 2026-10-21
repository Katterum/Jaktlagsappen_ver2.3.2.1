async function manageUser(payload){
  if(!client)return {ok:false,error:'Supabase är inte konfigurerat.'};

  try{
    const {data,error}=await client.functions.invoke(
      'manage-user',
      {body:payload}
    );

    return error
      ? {ok:false,error:data?.error||error.message}
      : {ok:true,...data};

  }catch(e){
    return {ok:false,error:e.message};
  }
}
