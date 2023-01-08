// loading environment variables
const supabaseUrl : string | undefined = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey : string | undefined = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if(supabaseKey == undefined || supabaseUrl == undefined){
    throw new Error('Supabase config not loaded')
}

// creating an object for exporting environment variables
const environmentVariables : {
    supabaseKey: string;
    supabaseUrl: string;
} = {
    supabaseKey,
    supabaseUrl
}

// export the object 
export default environmentVariables