function test(a, b) {
  if(1) {
    a('正确')
  }else {
    b("错误")
  }
}

test(
  res => {
    console.log(res);
  },
  err => {
    console.log(err);
  }
)