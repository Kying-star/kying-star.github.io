(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{696:function(t,a,s){"use strict";s.r(a);var r=s(5),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"写给前端的操作系统说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#写给前端的操作系统说明"}},[t._v("#")]),t._v(" 写给前端的操作系统说明")]),t._v(" "),s("h2",{attrs:{id:"计算机开机启动流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#计算机开机启动流程"}},[t._v("#")]),t._v(" 计算机开机启动流程")]),t._v(" "),s("h3",{attrs:{id:"启动流程总览"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动流程总览"}},[t._v("#")]),t._v(" 启动流程总览")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200320141458930.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDk4NDY2NA==,size_16,color_FFFFFF,t_70#pic_center",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"cpu-供电"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cpu-供电"}},[t._v("#")]),t._v(" CPU 供电")]),t._v(" "),s("p",[t._v("按下主机的电源键后，计算机开始启动，为主板部分芯片和 CPU 进行供电。主板上电后开始初始化固件。固件是一些固化在芯片组上的程序，它会尝试去启动 CPU。如果启动失败(例如 CPU 坏了或者没插好)，计算机就会死机并且给出错误提示（某些版本的主板固件会发出蜂鸣警告）。这种状态称为“zoombie-with-fans”。")]),t._v(" "),s("p",[t._v("如果前一个阶段为出错，就会开始加电工作，在多 CPU 或多核 CPU 情况下，某一个 CPU 会被随机选取作为启动 CPU （ bootstrap processor ， BSP）运行 BIOS 内部的程序。其余的 CPU（application processor , AP）会保持停机直到操作系统内核显式地使用它们。")]),t._v(" "),s("p",[t._v("2000 年以前的计算机主板上均适用 BIOS，如今绝大多数计算机采用的是 EFI 或者 UEFI。BIOS 正在逐渐被淘汰。基于 EFI 、 UEFI 的开机过程与传统的 BIOS 不尽相同。本文的传统的 BIOS ，intel CPU 为例介绍开机过程。")]),t._v(" "),s("p",[t._v("此时 CPU 工作模式为实模式，该模式下地址总线是 20 位，寻址范围是 0x00000 ~ 0xFFFFF 的 1M 范围。这也就解释了为什么 BIOS 的容量只有 1 MB。")]),t._v(" "),s("p",[t._v("Intel CPU 用三种运行模式:实模式、32位保护模式、64位保护模式。")]),t._v(" "),s("ul",[s("li",[t._v("实模式：intel 8086 的寻址方案，为了商业连续性，兼容了这古老的方案。")]),t._v(" "),s("li",[t._v("保护模式：采用了虚实地址转换的方式。")])]),t._v(" "),s("p",[t._v("在 BIOS 启动之初，内存是空的。此时 CPU 处于实模式，内存的地址映射均为硬链接的设备。")]),t._v(" "),s("h3",{attrs:{id:"重置向量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重置向量"}},[t._v("#")]),t._v(" 重置向量")]),t._v(" "),s("h3",{attrs:{id:"bios-初始化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bios-初始化"}},[t._v("#")]),t._v(" BIOS 初始化")]),t._v(" "),s("h3",{attrs:{id:"bios-post-加电自检"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bios-post-加电自检"}},[t._v("#")]),t._v(" BIOS POST(加电自检)")]),t._v(" "),s("h3",{attrs:{id:"bios-记录系统设定值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bios-记录系统设定值"}},[t._v("#")]),t._v(" BIOS 记录系统设定值")]),t._v(" "),s("h3",{attrs:{id:"mbr"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mbr"}},[t._v("#")]),t._v(" MBR")]),t._v(" "),s("h3",{attrs:{id:"硬盘启动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#硬盘启动"}},[t._v("#")]),t._v(" 硬盘启动")]),t._v(" "),s("h2",{attrs:{id:"名词说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#名词说明"}},[t._v("#")]),t._v(" 名词说明")]),t._v(" "),s("h3",{attrs:{id:"什么是-bios-？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是-bios-？"}},[t._v("#")]),t._v(" 什么是 BIOS ？")]),t._v(" "),s("p",[t._v("BIOS是什么？BIOS，即基本输入/输出系统，是计算机中非常基础且重要的程序。他负责开机时对系统的各项硬件进行初始化设置和测试，以确保系统能够正常工作。用户在使用计算机的过程中，如果硬件不正常则立即停止工作，并把出错的设备信息反馈给用户。")]),t._v(" "),s("h2",{attrs:{id:"ref"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ref"}},[t._v("#")]),t._v(" Ref")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://blog.csdn.net/weixin_44984664/article/details/104524792",target:"_blank",rel:"noopener noreferrer"}},[t._v("计算机开机启动过程详解"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);