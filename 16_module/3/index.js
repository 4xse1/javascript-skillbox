function globalError() {
  const error = Error("Глобальная ошибка");
  error.name = "GlobalError";
  throw error;
}

function localError() {
  const error = Error("Локальная ошибка");
  error.name = "LocalError";
  throw error;
}

function testErrorScope(fn) {
  try {
    fn();
  }catch (error) {
    if (error.name == "GlobalError") {
      console.log("Обнаружена глобальная ошибка");
    } else {
      console.log("Обнаружена локальная ошибка");
    }
    console.error(error);
  }
}
testErrorScope(localError);
testErrorScope(globalError);
