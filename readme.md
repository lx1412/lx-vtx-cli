# 说明
webpack 都升级到4版本，取消检测配置文件修改后自动重启的功能，所有依赖通过DllReferencePlugin导入。
# 使用
```
vtx-cli [-d] [-v] [-m]

Options:
  --help      Show help                                                [boolean]
  --version   Show version number                                      [boolean]
  -d, --dva   dva + react                                              [boolean]
  -m, --mobx  mobx + react                                             [boolean]
  -v, --vue   vue + vuex                                               [boolean]
```
# License
MIT