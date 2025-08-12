/* 
 * Object Manager class
 */

class CuserManager {
    static add(user) {
        users.push(user);
    }


}


if (typeof module !== "undefined" && module.exports) {
    module.exports = CuserManager;
}