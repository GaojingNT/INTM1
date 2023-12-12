const { template } = require('@babel/core')

function countPosNegValue(posNegIntegerArray) {
    // กรณี posNegIntegerArray เป็น null หรือ undefined
    if (posNegIntegerArray === null || posNegIntegerArray === undefined) {
      return undefined;
    }
  
    // กรณี posNegIntegerArray เป็น empty array
    if (posNegIntegerArray.length === 0) {
      return {};
    }
  
    // กำหนดค่าเริ่มต้นของ positive และ negative เป็น 0
    let positiveCount = 0;
    let negativeCount = 0;
  
    // วนลูปตรวจสอบทุกรายการใน posNegIntegerArray
    posNegIntegerArray.forEach((num) => {
      // ตรวจสอบว่าเป็นจำนวนเต็มบวกหรือไม่
      if (num > 0) {
        positiveCount++;
      }
      // ตรวจสอบว่าเป็นจำนวนเต็มลบหรือไม่
      else if (num < 0) {
        negativeCount++;
      }
      // กรณีไม่เป็นจำนวนเต็มบวกและจำนวนเต็มลบ
      // ไม่ต้องทำอะไรเพิ่มเติม
    });
  
    // สร้าง object ที่มี properties positive และ negative แล้ว return
    return { positive: positiveCount, negative: negativeCount };
  }

module.exports = countPosNegValue
