'use client'; // Use this for client components in the App Router
import Link from 'next/link';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from 'next/navigation'; // Use usePathname to get the current path

export default function BreadcrumbComponent() {
  const pathname = usePathname(); // Get the current pathname

  // Extract path after `/dashboard`
  const fullPath = pathname.replace('/dashboard', '').split('/').filter(Boolean);

  // Generate breadcrumb items
  const breadcrumbs = fullPath.map((segment, index) => {
    // Construct the breadcrumb link
    const href = `/dashboard/${fullPath.slice(0, index + 1).join('/')}`;
    const isLast = index === fullPath.length - 1;

    return (
      <BreadcrumbItem key={index} className="hidden md:flex">
        <BreadcrumbLink href={href} aria-current={isLast ? 'page' : undefined}>
          {segment.replace(/-/g, ' ')} {/* Replace hyphens with spaces for better readability */}
        </BreadcrumbLink>
        {!isLast && <BreadcrumbSeparator />}
      </BreadcrumbItem>
    );
  });

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {/* Root breadcrumb */}
        <BreadcrumbItem className="hidden  md:flex">
          <BreadcrumbLink href="/dashboard/user/">dashboard</BreadcrumbLink>
          {breadcrumbs.length > 0 && <BreadcrumbSeparator className='flex'/>}
        </BreadcrumbItem>
        {/* Dynamic breadcrumbs */}
        {breadcrumbs}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
