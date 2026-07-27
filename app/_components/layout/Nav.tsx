import NavClient from "./NavClient";

// Nav is a thin server component wrapper so the nav can be imported
// into server component layouts without needing 'use client' at the top level.
export default function Nav() {
  return <NavClient />;
}
