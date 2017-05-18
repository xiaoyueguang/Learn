// 异步加载/代码分割
import loadSomething from 'bundle-loader?lazy!./Something'

<Bundle load={loadSomething}>
  {(mod) => (
    // do something w/ the module
  )}
</Bundle>