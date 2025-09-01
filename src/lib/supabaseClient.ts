import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nebpdgvaiifhdxfbnetc.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5lYnBkZ3ZhaWlmaGR4ZmJuZXRjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY3MzA0NTEsImV4cCI6MjA3MjMwNjQ1MX0.hzta86fXmPbw1gZetAVxaNebgDLPMZuP3GqN7WPOR9A'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
