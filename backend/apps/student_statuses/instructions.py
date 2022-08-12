# student list -> a button(status) -> popup -> call API -> student_id -> studentStatues[]

# new view for student status-> filter by student id -> studentstatuese[]
# StudentStatus.objects.filter(student=student).order_by('-created_at')


# new view for student -> instance.related_student_statuses.all() ->
# histories = StudentStatusSerailzer(instance.related_student_statuses.all(), many=True)
# return Response(histories.data)
# 1. make filter class for student status ->
# studentstatuses/?student=1

# 2. find student and return studentstatus histories
# students/{student_id}/status_histroies/
