import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://ohmjxqthjlmvctulxyux.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9obWp4cXRoamxtdmN0dWx4eXV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDU0OTcwOTksImV4cCI6MTk2MTA3MzA5OX0.s6E3x5ow_Vd042sF0imxYkhHo8Q9hlk8mZqU2d9mMNo"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)