from secrets import choice
import sqlite3 as lite

#functionality goes here
class DatabaseManage(object):
    
    def __init__(self):
        global con
        try:
            con = lite.connect('courses.db')
            with con:
                cur = con.cursor()
                cur.execute("CREATE TABLE IF NOT EXISTS course(Id INTEGER PRIMARY KEY AUTOINCREAMENT,name TEXT, description TEXT, price TEXT, is_private BOOLEAN NOT NULL DEFAULT 1)")
        except Exception:
            print("Unable to create a DB!")
        
        #methods

        #TODO: create data
        def insert_data(self, data):
            try:
                with con:
                    cur = con.cursor()
                    cur.execute(
                        "INSERT INTO course(name, description, prize, is_private) VALUES (?,?,?,?)", data
                         
                        )
            except Exception:
                return False

        #TODO: read data
        def fetch_data(self):
            try:
                with con:
                    cur =con.cursor()
                    cur.execute("SELECT * FROM courses")
                    return cur.fetchall()
            except Exception:
                return False

        #TODO: delete data 
        def delete_data(self,Id):
            try:
                with con:
                    cur= con.cursor()
                    sql = "DELETE FROM course WHERE id = ?"
                    cur.execute(sql, [id])
                    cur.execute(sql)
            except Exception:
                pass



#TODO:provide interface to user

def main():
    print("*"*40)
    print("\n:: COURSE MANAGMENT :: \n")
    print("*"*40)

    db = DatabaseManage()
    print("#"*40)
    print("\n ::User manual:: \n")
    print("#"*40)

    print ('1. Insert a new Course')
    print ("2. Show all courses")
    print ("3. Delete a course (NEED ID OF COURSE)\n")
    print("#"*40)
    print("\n")

    choice = input("\n Enter a choice: ")
     
    if choice == "1":
         name = input("\n Enter course name: ")
         description = input("\n Enter description: ")
         price = input("\n Enter course price: ")
         private = input("\n Is this course private (0/1):  ")
         
         if db.insert_data([name, description, price, private]):
              print("Course was inserterd succcessfully")
         else:
            print("OOPS something is wrong")
    
    elif choice == "2":
        print("\n:: COURSE LIST ::\n") 

        for index, item in enumerate(db.fetch_data()):
            print("\n Sl no : " + str(index + 1))
            print("\n Course ID : " + str(item[0]))
            print("\n Course Name : " + str(item[2]))
            print("\n Course Description : " + str(item[2]))
            print("\n Course Price : " + str(item[3]))
            private ='Yes' if item[4] else 'NO'
            print("Is Private : " + private)
            print("\n")
    elif choice == '3':
         record_id = input("Enter the course ID: ")

         if db.delete_data(record_id):
             print("Course was deleted with a success")
         else: 
             print("OOPS SOMETHING WENT WRONG ")
    else: 
             print("\n BAD CHOICE")
    
if __name__ == '__main__':
    main()





