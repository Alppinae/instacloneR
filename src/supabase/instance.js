import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://osupmmqgjdziiybmbqbq.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9zdXBtbXFnamR6aWl5Ym1icWJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk3MzYyODQsImV4cCI6MjAzNTMxMjI4NH0.NVU3Zy7RorTet7wmDO9crD8R8jovwWnT_S0jsDahpAA"
export const supabase = createClient(supabaseUrl, supabaseKey)