# Replace-epdf-as-pdf
A user script that open pdf instead of epdf directly when press the pdf download bottom.

# How to use
By TamperMonkey or other userscript manager.

# Bugs existed
- Won't work sometimes. May repaire by fresh the page.
- Not support science.org

# 使用方法和已知问题
用TamperMonkey或者任意用户脚本管理器实现，新建一个脚本以后，将user.js代码复制并粘贴到其中即可。
偶尔会无效，可能是由于页面没有到执行用户脚本的阶段导致没有修改成功。一般刷新可以解决问题。
最近发现science也开始用epdf这种坏文明了，目前还没有增加对于science的支持。
2022.6.25: 发现可能会导致SI打不开，具体原因有待研究
2023.1.6: SI问题似乎不再出现
