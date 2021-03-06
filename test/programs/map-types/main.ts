
interface MyType {}

interface MyMap1 {
    [id: string]: MyType;
}

/**
 * The additionalProperties annotation should be ignored
 * @additionalProperties false
 */
interface MyMap2 {
    [id: string]: (string | number);
}

type MyMap3 = Readonly<MyMap2>;

interface MyObject {
    map1: MyMap1;
    map2: MyMap2;
    map3: MyMap3;
}
