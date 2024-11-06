import { Suspense, LazyExoticComponent } from "react";
import { Loader } from "./Loader";

const Loadable = (Component: LazyExoticComponent<() => JSX.Element>) => () =>
  (
    <Suspense fallback={<Loader />}>
      <Component />
    </Suspense>
  );

export default Loadable;
