'use server'

import { redirect } from "next/navigation"
import { createClient } from '@/app/utils/supabase/server'
import { revalidatePath } from "next/cache"

export async function signOut() {
    const supabase = await createClient()
  
    const { error } = await supabase.auth.signOut()
  
    if (error) {
      redirect('/error')
    }
  
    revalidatePath('/', 'layout')
    redirect('/')
  }