import logo from "@/assets/logo-full.png";

/** Shown by CmsGate (App.tsx) while content is still loading from Strapi.
 * Ghost header bar is sized to roughly match the real Header so there's
 * minimal layout jump once it mounts. */
const AppSkeleton = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <div className="px-4 pt-5">
      <div className="nav-pill mx-auto max-w-[1200px] h-16 rounded-full animate-pulse motion-reduce:animate-none bg-foreground/5" />
    </div>
    <div className="flex-1 flex items-center justify-center">
      <img
        src={logo}
        alt="CodersDive"
        className="h-9 w-auto opacity-40 animate-pulse motion-reduce:animate-none"
      />
    </div>
  </div>
);

export default AppSkeleton;
