package com.ray;


// 类名与文件名得一致
public class HelloWorld {
  public HelloWorld () {
    int num = 10;
    double double_num = 0.2;
    char str = 'f';

    int[] arr = new int[10];
    arr[0] = 1;

    int sum = 0;
    for (int i = 0; i <= 100; i++) {
      sum += i;
    }

    // "不能使用单引号"
    System.out.println("Hello World!");

    System.out.println(num + double_num + str);
    System.out.println(arr[0]);
    System.out.println(sum);

    Pet cat = new Pet("lili");
    Pet dog = new Pet("lili", "dog");
    System.out.println(cat.getName());
    System.out.println(dog.getType());

    Torch torch = new Torch();

    System.out.println("当前能量值");
    System.out.println(torch.status());
    System.out.println("开一次后, 当前能量值");
    torch.open();
    System.out.println(torch.status());
    System.out.println("开两次后, 当前能量值");
    torch.open();
    System.out.println(torch.status());
    System.out.println("充电后, 当前能量值");
    torch.charge();
    System.out.println(torch.status());
  }
}

// javac HelloWorld.java 编译文件 生成 HelloWorld.class 二进制文件
// java HelloWorld 执行编译后的文件中的 main 方法

class Pet {

  Pet (String name) {
    this.type = "cat";
    this.name = name;
  }
  Pet (String name, String type) {
    this.name = name;
    this.type = type;
  }

  String getName () {
    return this.name;
  }

  String getType () {
    return this.type;
  }

  String name = "";
  private String type = "";
}

interface TorchInter {
  public void open ();
  public void charge ();
  public int status ();
  int energy = 100;
}

class Torch implements TorchInter {
  public void open () {
    this.energy = this.energy - 10;
    if (this.energy < 0) {
      this.energy = 0;
    }
  }

  public void charge () {
    this.energy = this.energy + 50;
    if (this.energy > 100) {
      this.energy = 100;
    }
  }

  public int status () {
    return this.energy;
  }
  
  private int energy = 100;
}