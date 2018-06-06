// export const sidebar = [
//   {
//     title: '首页',
//     icon: 'home',
//     name: 'index'
//   },
//   {
//     title: '订单管理',
//     icon: 'order',
//     name: 'order'
//   },
//   {
//     title: '用户管理',
//     icon: 'userFrom',
//     name: 'user'
//   },
//   {
//     title: '内容管理',
//     icon: 'content',
//     name: 'content'
//   },
//   {
//     title: '统计管理',
//     icon: 'count',
//     name: 'count'
//   },
//   {
//     title: '综合管理',
//     icon: 'setting',
//     name: 'setting'
//   }
// ]
//const sidebar =[
//{
//  title: '首页',
//  icon: 'home',
//  name: 'index'
//},
//];


export function getMenu(){
	const sidebar =[
  {
    title: '首页',
    icon: 'home',
    name: 'index'
  },
];
  const menuList = JSON.parse(localStorage.getItem('permission'))
  ////console.log(menuList);
  if(menuList == undefined)return;
  for(var i in menuList.menus){
    const obj ={};
    obj.title= menuList.menus[i].menuName;
    obj.icon = menuList.menus[i].icon;
    obj.name = menuList.menus[i].routeName;
    sidebar.push(obj)
  }
   return sidebar;
  ////console.log(sidebar)
}
