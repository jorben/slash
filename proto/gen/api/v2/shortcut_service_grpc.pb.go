// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.3.0
// - protoc             (unknown)
// source: api/v2/shortcut_service.proto

package apiv2

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

const (
	ShortcutService_ListShortcuts_FullMethodName        = "/slash.api.v2.ShortcutService/ListShortcuts"
	ShortcutService_GetShortcut_FullMethodName          = "/slash.api.v2.ShortcutService/GetShortcut"
	ShortcutService_CreateShortcut_FullMethodName       = "/slash.api.v2.ShortcutService/CreateShortcut"
	ShortcutService_UpdateShortcut_FullMethodName       = "/slash.api.v2.ShortcutService/UpdateShortcut"
	ShortcutService_DeleteShortcut_FullMethodName       = "/slash.api.v2.ShortcutService/DeleteShortcut"
	ShortcutService_GetShortcutAnalytics_FullMethodName = "/slash.api.v2.ShortcutService/GetShortcutAnalytics"
)

// ShortcutServiceClient is the client API for ShortcutService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type ShortcutServiceClient interface {
	// ListShortcuts returns a list of shortcuts.
	ListShortcuts(ctx context.Context, in *ListShortcutsRequest, opts ...grpc.CallOption) (*ListShortcutsResponse, error)
	// GetShortcut returns a shortcut by id.
	GetShortcut(ctx context.Context, in *GetShortcutRequest, opts ...grpc.CallOption) (*GetShortcutResponse, error)
	// CreateShortcut creates a shortcut.
	CreateShortcut(ctx context.Context, in *CreateShortcutRequest, opts ...grpc.CallOption) (*CreateShortcutResponse, error)
	// UpdateShortcut updates a shortcut.
	UpdateShortcut(ctx context.Context, in *UpdateShortcutRequest, opts ...grpc.CallOption) (*UpdateShortcutResponse, error)
	// DeleteShortcut deletes a shortcut by id.
	DeleteShortcut(ctx context.Context, in *DeleteShortcutRequest, opts ...grpc.CallOption) (*DeleteShortcutResponse, error)
	// GetShortcutAnalytics returns the analytics for a shortcut.
	GetShortcutAnalytics(ctx context.Context, in *GetShortcutAnalyticsRequest, opts ...grpc.CallOption) (*GetShortcutAnalyticsResponse, error)
}

type shortcutServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewShortcutServiceClient(cc grpc.ClientConnInterface) ShortcutServiceClient {
	return &shortcutServiceClient{cc}
}

func (c *shortcutServiceClient) ListShortcuts(ctx context.Context, in *ListShortcutsRequest, opts ...grpc.CallOption) (*ListShortcutsResponse, error) {
	out := new(ListShortcutsResponse)
	err := c.cc.Invoke(ctx, ShortcutService_ListShortcuts_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *shortcutServiceClient) GetShortcut(ctx context.Context, in *GetShortcutRequest, opts ...grpc.CallOption) (*GetShortcutResponse, error) {
	out := new(GetShortcutResponse)
	err := c.cc.Invoke(ctx, ShortcutService_GetShortcut_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *shortcutServiceClient) CreateShortcut(ctx context.Context, in *CreateShortcutRequest, opts ...grpc.CallOption) (*CreateShortcutResponse, error) {
	out := new(CreateShortcutResponse)
	err := c.cc.Invoke(ctx, ShortcutService_CreateShortcut_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *shortcutServiceClient) UpdateShortcut(ctx context.Context, in *UpdateShortcutRequest, opts ...grpc.CallOption) (*UpdateShortcutResponse, error) {
	out := new(UpdateShortcutResponse)
	err := c.cc.Invoke(ctx, ShortcutService_UpdateShortcut_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *shortcutServiceClient) DeleteShortcut(ctx context.Context, in *DeleteShortcutRequest, opts ...grpc.CallOption) (*DeleteShortcutResponse, error) {
	out := new(DeleteShortcutResponse)
	err := c.cc.Invoke(ctx, ShortcutService_DeleteShortcut_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *shortcutServiceClient) GetShortcutAnalytics(ctx context.Context, in *GetShortcutAnalyticsRequest, opts ...grpc.CallOption) (*GetShortcutAnalyticsResponse, error) {
	out := new(GetShortcutAnalyticsResponse)
	err := c.cc.Invoke(ctx, ShortcutService_GetShortcutAnalytics_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ShortcutServiceServer is the server API for ShortcutService service.
// All implementations must embed UnimplementedShortcutServiceServer
// for forward compatibility
type ShortcutServiceServer interface {
	// ListShortcuts returns a list of shortcuts.
	ListShortcuts(context.Context, *ListShortcutsRequest) (*ListShortcutsResponse, error)
	// GetShortcut returns a shortcut by id.
	GetShortcut(context.Context, *GetShortcutRequest) (*GetShortcutResponse, error)
	// CreateShortcut creates a shortcut.
	CreateShortcut(context.Context, *CreateShortcutRequest) (*CreateShortcutResponse, error)
	// UpdateShortcut updates a shortcut.
	UpdateShortcut(context.Context, *UpdateShortcutRequest) (*UpdateShortcutResponse, error)
	// DeleteShortcut deletes a shortcut by id.
	DeleteShortcut(context.Context, *DeleteShortcutRequest) (*DeleteShortcutResponse, error)
	// GetShortcutAnalytics returns the analytics for a shortcut.
	GetShortcutAnalytics(context.Context, *GetShortcutAnalyticsRequest) (*GetShortcutAnalyticsResponse, error)
	mustEmbedUnimplementedShortcutServiceServer()
}

// UnimplementedShortcutServiceServer must be embedded to have forward compatible implementations.
type UnimplementedShortcutServiceServer struct {
}

func (UnimplementedShortcutServiceServer) ListShortcuts(context.Context, *ListShortcutsRequest) (*ListShortcutsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListShortcuts not implemented")
}
func (UnimplementedShortcutServiceServer) GetShortcut(context.Context, *GetShortcutRequest) (*GetShortcutResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetShortcut not implemented")
}
func (UnimplementedShortcutServiceServer) CreateShortcut(context.Context, *CreateShortcutRequest) (*CreateShortcutResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateShortcut not implemented")
}
func (UnimplementedShortcutServiceServer) UpdateShortcut(context.Context, *UpdateShortcutRequest) (*UpdateShortcutResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateShortcut not implemented")
}
func (UnimplementedShortcutServiceServer) DeleteShortcut(context.Context, *DeleteShortcutRequest) (*DeleteShortcutResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteShortcut not implemented")
}
func (UnimplementedShortcutServiceServer) GetShortcutAnalytics(context.Context, *GetShortcutAnalyticsRequest) (*GetShortcutAnalyticsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetShortcutAnalytics not implemented")
}
func (UnimplementedShortcutServiceServer) mustEmbedUnimplementedShortcutServiceServer() {}

// UnsafeShortcutServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to ShortcutServiceServer will
// result in compilation errors.
type UnsafeShortcutServiceServer interface {
	mustEmbedUnimplementedShortcutServiceServer()
}

func RegisterShortcutServiceServer(s grpc.ServiceRegistrar, srv ShortcutServiceServer) {
	s.RegisterService(&ShortcutService_ServiceDesc, srv)
}

func _ShortcutService_ListShortcuts_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListShortcutsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ShortcutServiceServer).ListShortcuts(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: ShortcutService_ListShortcuts_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ShortcutServiceServer).ListShortcuts(ctx, req.(*ListShortcutsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ShortcutService_GetShortcut_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetShortcutRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ShortcutServiceServer).GetShortcut(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: ShortcutService_GetShortcut_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ShortcutServiceServer).GetShortcut(ctx, req.(*GetShortcutRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ShortcutService_CreateShortcut_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateShortcutRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ShortcutServiceServer).CreateShortcut(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: ShortcutService_CreateShortcut_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ShortcutServiceServer).CreateShortcut(ctx, req.(*CreateShortcutRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ShortcutService_UpdateShortcut_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateShortcutRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ShortcutServiceServer).UpdateShortcut(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: ShortcutService_UpdateShortcut_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ShortcutServiceServer).UpdateShortcut(ctx, req.(*UpdateShortcutRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ShortcutService_DeleteShortcut_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteShortcutRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ShortcutServiceServer).DeleteShortcut(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: ShortcutService_DeleteShortcut_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ShortcutServiceServer).DeleteShortcut(ctx, req.(*DeleteShortcutRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ShortcutService_GetShortcutAnalytics_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetShortcutAnalyticsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ShortcutServiceServer).GetShortcutAnalytics(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: ShortcutService_GetShortcutAnalytics_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ShortcutServiceServer).GetShortcutAnalytics(ctx, req.(*GetShortcutAnalyticsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// ShortcutService_ServiceDesc is the grpc.ServiceDesc for ShortcutService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var ShortcutService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "slash.api.v2.ShortcutService",
	HandlerType: (*ShortcutServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "ListShortcuts",
			Handler:    _ShortcutService_ListShortcuts_Handler,
		},
		{
			MethodName: "GetShortcut",
			Handler:    _ShortcutService_GetShortcut_Handler,
		},
		{
			MethodName: "CreateShortcut",
			Handler:    _ShortcutService_CreateShortcut_Handler,
		},
		{
			MethodName: "UpdateShortcut",
			Handler:    _ShortcutService_UpdateShortcut_Handler,
		},
		{
			MethodName: "DeleteShortcut",
			Handler:    _ShortcutService_DeleteShortcut_Handler,
		},
		{
			MethodName: "GetShortcutAnalytics",
			Handler:    _ShortcutService_GetShortcutAnalytics_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "api/v2/shortcut_service.proto",
}
