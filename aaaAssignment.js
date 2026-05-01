
test('returns Guest when name is empty',()=> {
    //Arrange 
    const name = "";

    // Act 
    const result= greet(name)

    //Assert
    expect(result).toBe("Guest")
    });