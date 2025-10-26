import { getAllCategories } from "../lib/categories"
import type { ReactNode } from "react";
import type { Category } from "../types";
import Link from "next/link";

export default function ModelsLayout({children}: {children: ReactNode}) {
    const categories: Category[] = getAllCategories()
    console.log(categories);
    
    return (
    <div>  
        <nav>
           <Link href= "/3d-models">All</Link>

           {categories.map(cat => (
            <Link href={`/3d-models/categories/${cat.slug}`}
            key= {cat.slug}
            >
              {cat.displayName}
            </Link>
           ))}
        </nav>

        {children}
    </div>
    )
}