﻿
/**  User Maintenance API  **/
class UserApi {

    // List all users
    ListUsers = async function () {
        return $.ajax({
            url: "/ArquisoftApp/User/List",
            type: "GET",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
        });
    }
    // Get single user by Id
    GetUser = async function (userId) {
        return $.ajax({
            url: `/ArquisoftApp/User/Get?userId=${userId}`,
            type: "GET",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
        });
    }
    // Save or Update user data
    SaveUser = async function (data) {
        return $.ajax({
            url: "/ArquisoftApp/User/Save",
            type: "POST",
            data: JSON.stringify(data),
            dataType: "json",
            contentType: "application/json; charset=utf-8",
        });
    }
    // Delete user - Will change the state
    DeleteUser = async function (userId) {
        return $.ajax({
            url: `/ArquisoftApp/User/Delete?userId=${userId}`,
            type: "GET",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
        });
    }
    // Get current session user
    GetSessionUser = async function () {
        return $.ajax({
            url: `/ArquisoftApp/User/GetSessionUser`,
            type: "GET",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
        });
    }

    SaveCurrentUser = async function (data) {
        return $.ajax({
            url: `/ArquisoftApp/User/SaveCurrentUser`,
            type: "POST",
            data: JSON.stringify(data),
            dataType: "json",
            contentType: "application/json; charset=utf-8",
        });
    }
}

/**  Role Maintenance API  **/
class RoleApi {

    // List all roles
    ListRoles = async function () {
        return $.ajax({
            url: "/ArquisoftApp/Role/List",
            type: "GET",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
        });
    }
    // Get single role by Id
    GetRole = async function (roleId) {
        return $.ajax({
            url: `/ArquisoftApp/Role/Get?roleId=${roleId}`,
            type: "GET",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
        });
    }
    // Save or Update Role data
    SaveRole = async function (data) {
        return $.ajax({
            url: "/ArquisoftApp/Role/Save",
            type: "POST",
            data: JSON.stringify(data),
            dataType: "json",
            contentType: "application/json; charset=utf-8",
        });
    }
    // List all permissions by role
    GetPermissionsByRole = async function (roleId) {
        return $.ajax({
            url: `/ArquisoftApp/Role/GetPermissionsByRole?roleId=${roleId}`,
            type: "GET",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
        });
    }

}

/**  Clients Maintenance API  **/
class ClientApi {
    // List all clients
    ListClients = async function () {
        return $.ajax({
            url: "/ArquisoftApp/Client/List",
            type: "GET",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
        });
    }

    // Get single client by Id
    GetClient = async function (clientId) {
        return $.ajax({
            url: `/ArquisoftApp/Client/Get?clientId=${clientId}`,
            type: "GET",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
        });
    }

    // Save or Update Client data
    SaveClient = async function (data) {
        return $.ajax({
            url: "/ArquisoftApp/Client/Save",
            type: "POST",
            data: JSON.stringify(data),
            dataType: "json",
            contentType: "application/json; charset=utf-8",
        });
    }

    // Delete user - Will change the state
    DeleteClient = async function (clientId) {
        return $.ajax({
            url: `/ArquisoftApp/Client/Delete?clientId=${clientId}`,
            type: "GET",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
        });
    }
}

class MaterialApi {
    // List all Vendor Materials
    ListVendorMaterials = async function () {
        return $.ajax({
            url: "/ArquisoftApp/Material/ListVendorMaterials",
            type: "GET",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
        });
    }

    // Get single vendor material by Id
    GetVendorMaterial = async function (materialId) {
        return $.ajax({
            url: `/ArquisoftApp/Material/GetVendorMaterial?materialId=${materialId}`,
            type: "GET",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
        });
    }




    // List all materials
    ListMaterials = async function () {
        return $.ajax({
            url: "/ArquisoftApp/Material/ListMaterials",
            type: "GET",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
        });
    }

    // Get single material by Id
    GetMaterial = async function (materialId) {
        return $.ajax({
            url: `/ArquisoftApp/Material/GetMaterial?materialId=${materialId}`,
            type: "GET",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
        });
    }

    // Save or Update material data
    SaveMaterial = async function (data) {
        return $.ajax({
            url: "/ArquisoftApp/Material/Save",
            type: "POST",
            data: JSON.stringify(data),
            dataType: "json",
            contentType: "application/json; charset=utf-8",
        });
    }

    // Delete material - Will change the state
    DeleteMaterial = async function (materialId) {
        return $.ajax({
            url: `/ArquisoftApp/Material/DeleteMaterial?materialId=${materialId}`,
            type: "GET",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
        });
    }

}