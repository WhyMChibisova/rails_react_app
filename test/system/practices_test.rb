require "application_system_test_case"

class PracticesTest < ApplicationSystemTestCase
  setup do
    @practice = practices(:one)
  end

  test "visiting the index" do
    visit practices_url
    assert_selector "h1", text: "Practices"
  end

  test "should create practice" do
    visit practices_url
    click_on "New practice"

    fill_in "Duration", with: @practice.duration
    fill_in "Hours per student", with: @practice.hours_per_student
    fill_in "Kind", with: @practice.kind
    click_on "Create Practice"

    assert_text "Practice was successfully created"
    click_on "Back"
  end

  test "should update Practice" do
    visit practice_url(@practice)
    click_on "Edit this practice", match: :first

    fill_in "Duration", with: @practice.duration
    fill_in "Hours per student", with: @practice.hours_per_student
    fill_in "Kind", with: @practice.kind
    click_on "Update Practice"

    assert_text "Practice was successfully updated"
    click_on "Back"
  end

  test "should destroy Practice" do
    visit practice_url(@practice)
    click_on "Destroy this practice", match: :first

    assert_text "Practice was successfully destroyed"
  end
end
