import { Suspense } from "react";
import LivePlayer from "./LivePlayer";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LivePlayer />
    </Suspense>
  );
}